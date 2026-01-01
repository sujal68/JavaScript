// Question - 4 -> password validation - uppercase , lowercase , symbol , number and 6 langth |

#include <iostream>
using namespace std;

int main()
{
    char pass[100];
    int len = 0;

    bool upper = false, lower = false, digit = false, symbol = false;

    cout << "Enter Password: ";
    cin >> pass;

    // calculate length
    while (pass[len] != '\0')
    {
        len++;
    }

    if (len < 6)
    {
        cout << "Invalid Password";
        return 0;
    }

    for (int i = 0; i < len; i++)
    {
        if (pass[i] >= 'A' && pass[i] <= 'Z')
            upper = true;
        else if (pass[i] >= 'a' && pass[i] <= 'z')
            lower = true;
        else if (pass[i] >= '0' && pass[i] <= '9')
            digit = true;
        else
            symbol = true;
    }

    if (upper && lower && digit && symbol)
        cout << "Valid Password";
    else
        cout << "Invalid Password";

    return 0;
}
