window.onload = function() {


let pronoun = ['the','our','his'];
let adj = ['great','big','amazing'];
let noun = ['jogger','racoon','dog'];

var TextHTML = '<ul class="list-group">'

for(let i = 0 ; i < pronoun.length; i++) {
    for(let j = 0; j < adj.length; j++){
        for(let k = 0; k < noun.length; k++){
            const element_i = pronoun[i];
            const element_j = adj[j];
            const element_k = noun[k];
            let domainName = element_i + element_j + element_k + ".com";
            TextHTML += '<li class="list-group-item">' + domainName + '</li>';
        }
    }
}
TextHTML += "</ul>";

let element = document.querySelector('#domain');
element.innerHTML = TextHTML;

};

