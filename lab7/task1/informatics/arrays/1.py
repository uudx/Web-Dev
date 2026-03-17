n = int(input())
a = list(map(int, input().split()))

for i in range(0, n, 2):  # начинаем с 0, шаг 2
    print(a[i], end=' ')