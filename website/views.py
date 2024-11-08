from flask import Blueprint, render_template

views = Blueprint('views', __name__)

@views.route('/')
def home():
    return render_template("index.html")

@views.route('/contact')
def contact():
    return render_template('contact.html')

@views.route('/philosophy')
def philosophy():
    return render_template('philosophy.html')

@views.route('/the-offer')
def the_offer():
    return render_template('the-offer.html')