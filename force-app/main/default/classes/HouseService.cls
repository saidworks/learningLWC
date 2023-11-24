public with sharing class HouseService {
    @AuraEnabled(cacheable=true)
    public static List<House__c> getRecords(){
        try {
            // return the first created 10 records
            return [SELECT 
                        Id,
                         Name, 
                         Address__c,
                         State__c, 
                         City__c,
                         Zip__c
                         FROM House__c
                         ORDER BY CreatedDate 
                         LIMIT 10];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
            
        } 
    }
}