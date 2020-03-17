def isPrime(num):    
        if num > 1: 
        # Iterate from 2 to n / 2  
            for i in range(2, num//2):

           # If num is divisible by any number between  
           # 2 and n / 2, it is not prime  
                if (num % i) == 0:
                    return False
            else: 
                return True 
        else: 
            return False
isPrime(7)

a=0
b=0
max_n=0
for i in range(-1000,1000):
    for j in range(-1000,1000):
        n=1
        flag=True
        while(flag):
            if(isPrime(n**2+i*n+j)):
                n+=1
            else:
                if(max_n<n):
                    max_n=n
                    a=i
                    b=j
                flag=False
print(a*b)