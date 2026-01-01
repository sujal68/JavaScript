// Question - 3 -> Find Duplicate Element on Array

#include <iostream>
using namespace std;

int main()
{
    int arr[] = {1, 4, 6, 4, 1};
    int n = 5;

    cout << "Duplicate elements: ";

    for (int i = 0; i < n; i++)
    {
        for (int j = i + 1; j < n; j++)
        {
            if (arr[i] == arr[j])
            {
                cout << arr[i] << " ";
                break; // so same duplicate prints only once
            }
        }
    }

    return 0;
}
