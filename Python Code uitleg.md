csv_to_js.py → genereert // comment\n[x, z], regels
inject_into_layer.py → vindt de juiste const *Coords = [ array in het nieuwe formaat en vervangt de inhoud

csv_to_js.py is veel simpeler geworden — de uitgebreide template met 7 regels per marker is vervangen door 2 regels (// comment + [x, z],). Het IMAGE veld is ook weggevallen want dat zit nu in de layer file zelf.

inject_into_layer.py werkt nu op het nieuwe formaat. In plaats van te zoeken naar //CategoryName comments als anker, zoekt het nu naar const *Coords = [...] arrays en vervangt de inhoud daartussen. De "comment" sleutel in de CATEGORY_MAP is vervangen door "array" met de exacte variabelenaam.

Één aandachtspunt: de array namen in de CATEGORY_MAP moeten exact overeenkomen met hoe ze in jouw nieuwe custom.*.js bestanden staan. Als je straks een output filename voor een nieuwe categorie toevoegt, hoef je alleen maar één regel aan de CATEGORY_MAP toe te voegen. 🙂