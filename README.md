sound wave => [1,2,3]
min fq = 50
max fq = 80

min default = 40
max default = 1000

output array of integers

corrupt soundwave => frequencies will include a null value
produce error message (argument error) saying input is corrupt

create soundwave obj, call convert method with array.

[50,40,110], minFreq=50, maxFreq=90 => [50,50,90]
