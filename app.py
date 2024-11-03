from flask import Flask, render_template, request 
from database.database import Database
from constellation.star import Star

app = Flask(__name__)

db = Database()

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/constellation/<name>", methods=["get"])
def test(name):
    pass

if __name__ == "__main__":
    c = db.find_const('cassiopeia')
    print(c)