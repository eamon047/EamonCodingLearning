class MinHeap:
    def __init__(self):
        self.heap = [0]
        self.size = 0

    def __str__(self):
        return str(self.heap[1:])
    
    def _swap(self , i , j):
        self.heap[i] , self.heap[j] = self.heap[j] , self.heap[i]

    def _float_up(self , index):
        parent = index // 2

        if index > 1 and self.heap[index] < self.heap[parent]:
            self._swap(index , parent)
            self._float_up(parent)

    def _bubble_down(self , index):
        left = index * 2
        right = index * 2 + 1
        smallest = index

        if left <= self.size and self.heap[left] < self.heap[smallest]:
            smallest = left
        if right <= self.size and self.heap[right] < self.heap[smallest]:
            smallest = right

        if smallest != index:
            self._swap(index , smallest)
            self._bubble_down(smallest)

    def insert(self, value):
        self.heap.append(value)
        self.size += 1
        self._float_up(self.size)

    def delete_min(self):
        if self.size == 0:
            return None
        
        min_value = self.heap[1]
        self.heap[1] = self.heap[self.size]

        self.heap.pop()
        self.size -= 1

        if self.size > 0:
            self._bubble_down(1)

        return min_value
    
    def get_min(self):
        if self.size == 0:
            return None
        return self.heap[1]
    
    def is_empty(self):
        return self.size == 0
    

        
