// Question 5 -> Frequency Find Of Array
#include <iostream>
using namespace std;

int main()
{
    int arr[] = {1, 2, 3, 2, 4, 1, 2, 5};
    int n = 8;

    bool visited[100] = {false};

    for (int i = 0; i < n; i++)
    {
        if (visited[i])
            continue;

        int count = 1;

        for (int j = i + 1; j < n; j++)
        {
            if (arr[i] == arr[j])
            {
                count++;
                visited[j] = true;
            }
        }

        cout << arr[i] << " : " << count << endl;
    }

    return 0;
}
