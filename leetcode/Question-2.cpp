#include <iostream>
using namespace std;

int main()
{
    int array[] = {98, 23, 56, 78, 25};
    int length = sizeof(array) / sizeof(array[0]); // length = 5;

    int left = 0;
    int right = length - 1;

    while (left < right)
    {
        int temp = array[left];
        array[left] = array[right];
        array[right] = temp;

        left++;
        right--;
    }

    for (int i = 0; i < length; i++)
    {
        cout << array[i] << " ";
    }
};