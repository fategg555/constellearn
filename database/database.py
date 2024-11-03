import firebase_admin
from firebase_admin import firestore
from firebase_admin import credentials
import constellation.constellation
import constellation.star

class Database:
    def __init__(self):
        cred = credentials.Certificate("./key.json")
        firebase_admin.initialize_app(cred)
        self.db = firestore.client()

    def get_constellations(self):
        const = self.db.collection("constellations")
        data = const.stream()
        
    def get_constellation(self, name):
        pass

    def set_constellation(self, name):
        star = constellation.star.Star("name", None)
        stars_ref = self.db.collection("stars")
        stars_ref.document(name)
        c = constellation.constellation.Constellation(name, 5, star)
        const = self.db.collection("constellations")
        

if __name__ == '__main__':
    d = Database()