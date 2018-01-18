 export function removeMail(MailList) {
     return {

        type: 'REMOVE_MAIL' ,

        MailList

     }	


}

 export function IsReaded(MailItem) {
     return {

        type: 'CHANGE_READED' ,

        MailItem

     }	


}



 export function markSpam(MailItem) {
     return {

        type: 'MARK_SPAM' ,

        MailItem

     }	


}