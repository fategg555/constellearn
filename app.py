from flask import Flask, render_template, request 
from database import database

app = Flask(__name__)

db = Database()

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/test/<id>", methods=["POST"])
def test(id):
    print()
