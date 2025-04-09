# utils/model_utils.py

import pickle

model = pickle.load(open('ml/website_classifier_model.pkl', 'rb'))
vectorizer = pickle.load(open('ml/vectorizer.pkl', 'rb'))

def classify_url(url):
    x = vectorizer.transform([url])
    return model.predict(x)[0]
