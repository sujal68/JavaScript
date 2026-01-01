// Question 2 Reverce Of single Array

#include <iostream>
using namespace std;

void reverseArray(int a[], int n)
{
    int l = 0;
    int r = n - 1;

    while (l < r)
    {
        int temp = a[l];
        a[l] = a[r];
        a[r] = temp;

        l++;
        r--;
    }
}

int main()
{
    int a[] = {12, 65, 98, 34, 87, 43};
    int n = sizeof(a) / sizeof(a[0]);

    reverseArray(a, n);

    cout << "Reversed Array: ";
    for (int i = 0; i < n; i++)
        cout << a[i] << " ";

    return 0;
}
