const article = document.getElementById("johnThePolitician");

const missionStatement = document.createElement("P");

missionStatement.innerHTML = "This is my mission statement, there are many like it but this one is mine."

article.appendChild(missionStatement);

const att = document.createAttribute("congressional-district");

att.value = "9";

article.setAttributeNode(att);