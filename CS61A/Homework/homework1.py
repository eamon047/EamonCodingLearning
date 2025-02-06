#-----Q2-----#
def k_in_num(k , num):
    num_set = set(map(int, str(num)))
    if k in num_set:
        return True
    else: return False


#-----Q3-----#
from operator import add, sub
def a_plus_abs_b(a , b):
    if b < 0:
        f = sub
    else:
        f = add
    return f(a , b)


#-----Q4-----#
def two_of_three(i , j , k):
    return i**2 + j**2 + k**2 - max(i , j , k)**2


#-----Q5-----#
def largest_factor(n):
    for i in range(n - 1 , 0 , -1):
        if n % i == 0:
            return i
