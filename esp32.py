import requests


def setMessage(author, message):
    url = 'http://localhost:3000/addpost'
    dat = {'author': author, 'msg': message}
    requests.post(url, json=dat)


setMessage("Hugo", "God morgon")
