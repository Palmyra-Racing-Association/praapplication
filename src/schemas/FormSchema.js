module.exports = 
{
    "title": "Palmyra Racing Association Membership Application",
    "description": 
      "Please complete all sections.  Note that when your application is accepted we will need payment, waiver of liability, minor waivers, and health insurance "+
      "information.  We do not need any of that at the time of application.  The current year dues are $500."+
      "If you'd prefer to use a paper form, you can access it at the bottom of the page, scan it, and email it to hogbacksecretary@gmail.com.",
    "type": "object",
    "required": [
      "firstName", "lastName", "address", "city", "state", "zip", "phone", 
      "email", "birthday", "signature",
    ],
    "properties": {
      "firstName": {
        "type": "string",
        "title": "First name"
      },
      "lastName": {
        "type": "string",
        "title": "Last name"
      },
      "address": {
        "type": "string",
        "title": "Address"
      },
      "city": {
        "type": "string",
        "title": "City"
      },
      "state": {
        "type": "string",
        "title": "State"
      },
      "zip": {
        "type": "string",
        "title": "Zip"
      },
      "phone": {
        "type": "string",
        "title": "Preferred Phone Number"
      },
      "email": {
        "type": "string",
        "format": "email",
        "title": "E-mail"
      },
      "birthday": {
        "type": "string",
        "format": "date", 
        "title": "Birthday"
      },
      "occupation": {
        "type": "string",
        "title": "Occupation"
      },
      "recommendedBy": {
        "type": "string",
        "title": "Recommended By"
      },
      "familyMembers": {
        "type": "string",
        "title": "Family members (list all names and ages)"
      },
      "signature": {
        "type": "string",
        "title": "Signature of Applicant"
      },
    }
};