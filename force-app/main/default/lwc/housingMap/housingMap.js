import { LightningElement,wire } from 'lwc';
import getHouses from '@salesforce/apex/HouseService.getRecords';
export default class HousingMap extends LightningElement {
    mapMarkers;
    error;
    @wire(getHouses)
    wiredHouses({ error, data}){
        if(data){
            // We are using JS Map function to transform the data into mapMarkers shape. 
            this.mapMarkers = data.map((element) => {
                return {
                    location: {
                        Street: element.Street__c,
                        City: element.City__c,
                        State: element.State__c
                    
                },
                title: element.Name
            };
            });
            this.error = undefined;
        }else if(error){
                this.error = error;
                this.mapMarkers = undefined;
        }

    }
}