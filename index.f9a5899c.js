var a,r=document.querySelectorAll("ul > li"),t=Array.from(r).sort(function(a,r){var t=Number(a.dataset.salary.split(/\$|,/).join(""));return Number(r.dataset.salary.split(/\$|,/).join(""))-t}),e=document.querySelector("ul");e.innerHTML="",t.forEach(function(a){e.append(a)}),a=[],Array.from(r).forEach(function(r){var t={name:r.innerText,position:r.dataset.position,salary:r.dataset.salary,age:r.dataset.age};a.push(t)});
//# sourceMappingURL=index.f9a5899c.js.map
