# ml/train_model.py

import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.naive_bayes import MultinomialNB
import pickle
import os

data = {
    'url': ['youtube.com', 'facebook.com', 'khanacademy.org', 'geeksforgeeks.org'],
    'label': ['non-academic', 'non-academic', 'academic', 'academic']
}
df = pd.DataFrame(data)

vectorizer = CountVectorizer()
X = vectorizer.fit_transform(df['url'])
y = df['label']

model = MultinomialNB()
model.fit(X, y)

os.makedirs('ml', exist_ok=True)
pickle.dump(model, open('ml/website_classifier_model.pkl', 'wb'))
pickle.dump(vectorizer, open('ml/vectorizer.pkl', 'wb'))

print("✅ ML model trained and saved.")
