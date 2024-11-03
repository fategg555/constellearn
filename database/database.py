import firebase_admin
from firebase_admin import firestore
from firebase_admin import credentials
from google.cloud.firestore_v1 import CollectionReference, DocumentReference

from constellation import constellation, star

class Database:
    def __init__(self):
        cred = credentials.Certificate("./database/key.json")
        firebase_admin.initialize_app(cred)
        self.db = firestore.client()

    def get_constellations_col(self):
        return self.db.collection("constellations")
    
    def get_stars_col(self) -> CollectionReference:
        return self.db.collection("stars")
    
    def find_const(self, name):
        col = self.get_constellations_col().document(name)
        return col.get() if col.get().exists else None

    def find_star(self, star_name):
        col = self.get_stars_col().document(star_name)
        return col.get() if col.get().exists else None
        
    def get_constellation(self, name):
        pass

    def set_constellation(self, name):
        star = star.Star("name", None)
        stars_ref = self.db.collection("stars")
        stars_ref.document(name)
        c = constellation.Constellation(name, 5, star)
        const = self.db.collection("constellations")
        

if __name__ == '__main__':
    d = Database()
    x = d.find_const("cassiopeia")

    print(x.get('stars').get('star1').update({"small": x.get("stars").get("star")}))
