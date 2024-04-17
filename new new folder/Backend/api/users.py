from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List
from db.userUtils import getUsers, saveUsers
from db.dbutils import generateUuid

router = APIRouter()


class AuthCredentials(BaseModel):
    email: str
    password: str


class LoginResponse(BaseModel):
    id: str
    username: str


# login
@router.post("/login", response_model=LoginResponse)
async def login(credentials: AuthCredentials):
    usersJSON = getUsers()
    print("looking for this:---->", credentials)
    # check if user exists in database
    for user in usersJSON["users"]:
        if credentials.email == user["email"]:
            # user exists then check is password matches
            if credentials.password == user["password"]:
                return {"id": user["id"], "username": user["username"]}
            else:
                raise HTTPException(400, detail="wrong password")

    raise HTTPException(400, detail="User not found")


# register users
@router.post("/register", response_model=LoginResponse)
async def register(credentials: AuthCredentials):
    usersJSON = getUsers()
    # check if users exist
    for user in usersJSON["users"]:
        if credentials.email == user["email"]:
            raise HTTPException(400, detail="This account already exists")

    # register new user if account doesn't exist
    new_user = {
        "id": generateUuid(),
        "email": credentials.email,
        "password": credentials.password,
        "username": credentials.email.split("@")[0],
    }

    usersJSON["users"].append(new_user)
    saveUsers(usersJSON)
    return {"id": new_user["id"], "username": new_user["username"]}


@router.get("/test")
async def test():
    return {"message": "users endpoint works"}
