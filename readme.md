# Factorial benchmark comparison in JavaScript

Do the factorial(100) using the following ways:
- normal for loop
- for-of loop
- forEach function
- reduce function
- recursive (not proper tail call)
- recursive (proper tail call)


# Environments

### Node.js v12.19.0
```
-------
Using [for loop] to do factorial of 100
ans:  9.33262154439441e+157
default: 0.594ms
-------
-------
Using [for-of loop] to do factorial of 100
ans:  9.33262154439441e+157
default: 0.114ms
-------
-------
Using [forEach] to do factorial of 100
ans:  9.33262154439441e+157
default: 0.121ms
-------
-------
Using [reduce] to do factorial of 100
ans:  9.33262154439441e+157
default: 1.013ms
-------
-------
Using [recursive (not PTC)] to do factorial of 100
ans:  9.33262154439441e+157
default: 0.096ms
-------
-------
Using [recursive (PTC)] to do factorial of 100
ans:  9.332621544394418e+157
default: 0.096ms
-------
```

### Safari v14.0.3
```
[Log] -------
[Log] Using [for loop] to do factorial of 100
[Log] ans:  – 9.33262154439441e+157
[Debug] default: 0.819ms
[Log] -------
[Log] -------
[Log] Using [for-of loop] to do factorial of 100
[Log] ans:  – 9.33262154439441e+157
[Debug] default: 0.281ms
[Log] -------
[Log] -------
[Log] Using [forEach] to do factorial of 100
[Log] ans:  – 9.33262154439441e+157
[Debug] default: 0.202ms
[Log] -------
[Log] -------
[Log] Using [reduce] to do factorial of 100
[Log] ans:  – 9.33262154439441e+157
[Debug] default: 0.291ms
[Log] -------
[Log] -------
[Log] Using [recursive (not PTC)] to do factorial of 100
[Log] ans:  – 9.33262154439441e+157
[Debug] default: 0.308ms
[Log] -------
[Log] -------
[Log] Using [recursive (PTC)] to do factorial of 100
[Log] ans:  – 9.332621544394418e+157
[Debug] default: 0.300ms
[Log] -------
```

### Chrome
```
-------
VM270:56 Using [for loop] to do factorial of 100
VM270:57 ans:  9.33262154439441e+157
VM270:58 default: 0.216064453125 ms
VM270:59 -------
VM270:2 -------
VM270:56 Using [for-of loop] to do factorial of 100
VM270:57 ans:  9.33262154439441e+157
VM270:58 default: 0.113037109375 ms
VM270:59 -------
VM270:2 -------
VM270:56 Using [forEach] to do factorial of 100
VM270:57 ans:  9.33262154439441e+157
VM270:58 default: 0.139892578125 ms
VM270:59 -------
VM270:2 -------
VM270:56 Using [reduce] to do factorial of 100
VM270:57 ans:  9.33262154439441e+157
VM270:58 default: 0.13818359375 ms
VM270:59 -------
VM270:2 -------
VM270:56 Using [recursive (not PTC)] to do factorial of 100
VM270:57 ans:  9.33262154439441e+157
VM270:58 default: 0.147216796875 ms
VM270:59 -------
VM270:2 -------
VM270:56 Using [recursive (PTC)] to do factorial of 100
VM270:57 ans:  9.332621544394418e+157
VM270:58 default: 0.156982421875 ms
VM270:59 -------
```