a = input()
b = int(input())

l = len(a)
con = True

if(l%2 == 1):
    for i in range(l):
        if(i == int(l/2)+1):
            con = True
            break
        else:
            if(a[i] != a[-i]):
                con = False
                break
else:
    for i in range(l):
        if(a[i] != a[-i]):
            con = False
            break
if(b == 1 and con):
    print("YES")
elif(not con and b!=1):
    print("YES")
else:
    print("NO")