let form = document.querySelector('form');
if(localStorage["form_saved"] !== undefined){
window.addEventListener('load', function(){
    let to_load = JSON.parse(localStorage["form_saved"]);
    for(let i = 0; i < form.length; i++){
        if (form[i].type == "text" || form[i].type == "textarea") {
            form[i].value = to_load[i];
        }
        if (form[i].type == "checkbox" || form[i].type == "radio"){
            form[i].checked = to_load[i];
        }
        if (form[i].type == "select-one"){
            form[i].selectedIndex = to_load[i];
        }
        if (form[i].type == "select-multiple"){
            for (j = 0; j < to_load[i].length; j++){
                form[i].options[to_load[i][j]].selected = true;
            }
        }
    }
});
}

window.addEventListener('beforeunload', function(){
    let to_safe = [];
    for(let i = 0; i < form.length; i++){
        if (form[i].type == "text" || form[i].type == "textarea") {
            to_safe[i] = form[i].value;
        }
        if (form[i].type == "checkbox" || form[i].type == "radio"){
            to_safe[i] = form[i].checked;
        }
        if (form[i].type == "select-one"){
            to_safe[i] = form[i].selectedIndex;
        }
        if (form[i].type == "select-multiple"){
            to_safe_sub = [];
            for (j = 0; j < form[i].selectedOptions.length;j++){
                to_safe_sub.push(form[i].selectedOptions[j].index);
            }
            to_safe[i] = to_safe_sub;
        }
        localStorage["form_saved"] = JSON.stringify(to_safe);
    }
});


