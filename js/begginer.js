/* function datetime(string){
var past = new Date(string);
var now = new Date();
var listtime = new Array();
var t = Math.ceil((now.getTime() - past.getTime()) / 86400000);
var tam = now;
console.log('t:',t);
if(t < 7) {
    while(t > 0)
    {
        listtime.push((tam.getMonth()+1) + ' '+ tam.getDate());
        tam.setTime(tam.getTime() - 86400000);
        t--;
    }
} else {
    t = 7;
    while(t > 0)
    {
        listtime.push((tam.getMonth() + 1) + ' '+ tam.getDate()); //push day them vao
        tam.setTime(tam.getTime() - 86400000);
        t--;
    }
}

console.log('result:',listtime);
}
datetime('Nov 11 2017');


//object
 
var obj = {
    id: 1,
    text: 'abc',
    sumstring: funtion() {
        return this.id;
    }

}

...obj['sumstring'()]   */

var cat = {
    id: new Date().valueOf(),
    name: 'hihihehe',
    born: 2005,
    getAge: function (currentYear){
        return (currentYear - this.born);
    },

}
console.log(cat.getAge(2008))
var cats = {
    cats: [cat],
    addCat: function(newCat){
     this.cats.push(newCat)
    },
    findCatByName: function (name){
        var a = this.cats.find(function(cat){
            return cat.name === name;
        });
        return a
    },

}
console.log(cats.findCatByName('thuan'))