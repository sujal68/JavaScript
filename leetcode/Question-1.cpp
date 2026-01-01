// Question 1 Find index of sum of two element
#include <iostream>
using namespace std;

int main()
{
    int arr[] = {2, 7, 8, 9};
    int target = 9;
    int n = 4;

    for (int i = 0; i < n; i++)
    {
        for (int j = i + 1; j < n; j++)
        {
            if (arr[i] + arr[j] == target)
            {
                cout << i << " " << j;
                return 0;
            }
        }
    }

    cout << "Not Found";
    return 0;
}
