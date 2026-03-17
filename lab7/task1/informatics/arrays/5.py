n = int(input())
a = list(map(int, input().split()))

found = False
for i in range(n - 1):
    if a[i] * a[i+1] > 0:
        found = True
        break

print("YES" if found else "NO")