
// Business Logic for AddressBook -----
function AddressBook() {
  this.contacts = [];
  this.currentID = 0;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
}

AddressBook.prototype.assignId = function() {
  this.currentId =+ 1; 
  return this.currentId;
}

AddressBook.prototype.deleteContact = function(id) {
  for (var i = 0; i< this.contacts.length; i++) {
    if (this.contacts[i].id == id) {
      delete this.contacts[i]; {
        if (this.contacts[i].id == id) {
          return this.contacts[i];
        }
      }
    }
  };
  return false; 
}

// Business Logic for Contacts -----
function Contact (firstName, lastName, phoneNumber) {
  this.firstName = firstName; 
  this.lastName = lastName; 
  this.phoneNumber = phoneNumber; 
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName; 
}

//User Interface Logic -----------
var addressBook = new AddressBook();

function displayContactDetails(addressBookToDisplay) {
  var contactsList = $("ul#contacts");
  var htmlForContactInfo = "";
  addressBookToDisplay.contacts.forEach(function(contact){
    htmlForContactInfo += "<li id=" + contact.id + ">" + contact.firstName + " " + contact.lastName + "</li>";
  });
  contactsList.html(htmlForContactInfo);
}

$(document).ready(function(){
  $("form#new-contact").submit(function(event){
    event.preventDefault();
    var  inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var inputtedPhoneNumber = $("input#new-phone-number").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName, inputtedPhoneNumber);
    addressBook.addContact(newContact);
    console.log(addressBook.contacts);
    displayContactDetails(addressBook);


  });
});
