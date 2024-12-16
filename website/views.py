from flask import Blueprint, render_template, request

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

#This is the function to send the inquiry on the contact page
@views.route('/submit_inquiry', methods=['POST'])
def submit_inquiry():
    name = request.form.get('name')
    surname = request.form.get('surname')
    company = request.form.get('company')
    email = request.form.get('email')
    project = request.form.get('project')

    # Process the form data as needed
    print(f"Name: {name}, Surname: {surname}, Company: {company}, Email: {email}, Project: {project}")

    return f"Thank you for your inquiry, {name}! We'll get back to you shortly."
