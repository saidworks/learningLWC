import { LightningElement, wire } from 'lwc';
import FirstName from '@salesforce/schema/Contact.FirstName';
import LastName from '@salesforce/schema/Contact.LastName';
import Email from '@salesforce/schema/Contact.Email'; 
import getContacts from '@salesforce/apex/ContactController.getContacts';
import { reduceErrors } from 'c/ldsUtils';
const COLUMNS = {
    'FirstName': FirstName,
    'LastName':LastName,
    'Email': Email
}
export default class ContactList extends LightningElement {
    columns = COLUMNS; 
    @wire(getContacts)
    contacts;
    get errors(){
        return (this.contacts.error)? reduceErrors(this.contacts.error) : [];
    }

}