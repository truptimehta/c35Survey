class Voter{
    constructor(){
        this.name=null;
        this.emailid=null;
        this.index=0;
    }
getCount(){
        var voterCountref=database.ref('voterCount')
        voterCountref.on("value",function(data){voterCount=data.val();})
       // console.log(data);
      //  voterCountref.push(this.id,this.name)
    }

    updateCount(voterCount)
    {

        console.log("voterCount updated:" +voterCount)
        database.ref('/').update({
            voterCount:voterCount
        })
    }

    update(){

        var voterIndex="voters/voter" +voterCount
        console.log("voterIndex")
       // console.log("voterdeatils updated:" +name +emailid)
        database.ref(voterIndex).update({name:this.name,Emailid:this.emailid});
        }
  
    }
    