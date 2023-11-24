import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import FirstName from '@salesforce/schema/Contact.FirstName';
import LastName from '@salesforce/schema/Contact.LastName';
import Email from '@salesforce/schema/Contact.Email'; 
export default class ContactCreator extends LightningElement {
    objectApiName = CONTACT_OBJECT;
    fields = [FirstName,LastName,Email];
    handleSuccess(event){
        const onsuccess = new ShowToastEvent({
            title: "Contact Created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(onsuccess.id);
    }
}