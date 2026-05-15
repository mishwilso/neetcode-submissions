class DynamicArray {
public:
    int cap;
    int length;
    int *arr; // Array of capacity = 2

    DynamicArray(int capacity) {
        cap = capacity;
        length = 0;
        arr = new int[cap];
    }

    int get(int i) {
        return arr[i]; 
    }

    void set(int i, int n) {
        arr[i] = n;
    }

    void pushback(int n) {
        arr[length] = n;
        length++;
        if (length > cap){
            resize();
        }
    }

    int popback() {
        int tmp = arr[length - 1];
        arr[length - 1] = NULL;
        length--;
        return tmp;
    }

    void resize() {
        cap = cap * 2;
        int *newArr = new int[cap];

        for (int i = 0; i < length; i++)
        {
            newArr[i] = arr[i];
        }
        arr = newArr;

    }

    int getSize() {
        return length;
    }

    int getCapacity() {
        return cap;
    }
};
