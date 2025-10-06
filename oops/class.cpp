#include <iostream>
using namespace std;

class Hero
{
public:
    // Properties
    char name[100];
    int health = 80;
    int level = 4;
};
int main()
{
    Hero goku;
    cout << "size of class " << sizeof(goku)<<endl;
    cout << goku.health<<endl;
    cout << goku.level<<endl;


    
}