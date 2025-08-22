import os
from glob import glob
from pathlib import Path
import base64
from PIL import Image



array_template ='''
const quizData = [%s
];
'''

entry_template = '''
	{
		image: "%s", 
		answers: %s
	}'''


paths = glob(os.path.join(r"original pics","*"))

entries = []
for i,path in enumerate(paths):
	image_path = "%03d.png"%i
	names = [name.lower() for name in Path(path).stem.split('_')]
	names_anonymous = str([base64.b64encode(name.encode("utf8")).decode() for name in names]).replace('\'','\"')
	
	entry = entry_template%(image_path,names_anonymous)
	entries.append(entry)

	outpath = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(path))),image_path)

	image = Image.open(path)
	image.save(outpath,"PNG")


print(array_template%','.join(entries))

	