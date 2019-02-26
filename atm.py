a,b=input("enter").split()
a=float(a)
b=float(b)
c=float(b-a-(.5))
if a%5==0:
    if c>0:
        print(c)
    else:
        print(b)
elif a%5!=0:
    print(b)

    
