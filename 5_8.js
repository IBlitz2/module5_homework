let userMap = new Map();
userMap.set("Igor", "name");
userMap.set(30, "age");
userMap.set(true, "is Frontend developer");
for (let item of userMap) {
  console.log(`Ключ - ${item[0]}, Значение - ${item[1]}`);
}
