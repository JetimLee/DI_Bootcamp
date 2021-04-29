const anagramChecker = (str1, str2) => {
  console.log([...str1].sort().join("") === [...str2].sort().join(""));
};

string1 = "lama";
string2 = "mala";

string3 = "tommy";
string4 = "mommy";
anagramChecker(string1, string2);
anagramChecker(string3, string4);
