from flask import Flask, render_template, request 
from database.database import Database
from constellation.star import Star

app = Flask(__name__)

db = Database()

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/test/<id>", methods=["POST"])
def test(id):
    print()

if __name__ == "__main__":
    c = db.find_const('cassiopeia')
    s = db.find_star('star1')
    print(Star.from_ref(c))