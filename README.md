# Hash Tables

    - Hash maps, maps, unordered maps, dictionaries, objects
    - Objects in JS are a type of hash tables.
    - Built-in data structures in most languages. Python: dictionaries, JS: objects.
    - used in Database.

## Key and Value

    - Key is used as the index of where to find the value in memory
    - done in a hash function that gets to decide where to put the data on memory
    - Store both key and value together.

## Hash function

    - a function that generates a value of fixed length for each input that it gets.
    - One way: Given Hash Code(Key), no clue what the input was.
    - Idempotent: Same input, Same output. How to convert hash code to input?
    - Useful: for really fast data access, as the generated hash code exactly tells us where it is in our memory.
    - Isn't it make it slower to execute a hash function to generate a key?
        - ther're implemented with an optimum hashing function that is really fast.
        - SHA-256 slow but overly complex so used in cryptography
        - Usually O(1).

## Hash Tables

    - Insert: O(1)
    - Lookup: O(1)
    - Delete: O(1)  don't have to shift indexes like arrays.
    - Search: O(1)
    Using key, it tells that exactly where it is.

## Main Problem of Hash tables

    - when creating a hash table, the computer decide how much space to allocate. not all of it.
    - There's nothing telling the hash function to evenly distrubute until everything is full in memory, althoguh hash functions are optimised to try to distribute the data all over.
    - there are overflow entries in same memory space. (-> this is Linked List)
    - Also matters what to input.
    - it's called Collision.
    - can't avoid collisions with enough data with limited memory.
    - This slows down the ability to access or insert info, because to check what's in it, have to go one by one.
    - Theoretically, when there is a collision: the Big O of Read and write will be **O(n/k)**, k is the size of the hash table. -> O(n)

## How to deal with collision

    - in Linked List,
    - Separate Chaining, ... etc

##

    - When adding something, just add.
    - When retriving something, loop over the all length.

## Array vs Hash Table.

    - Search    O(n)    - Search    O(1)*
    - Loopup    O(1)    - Lookup    O(1)*
    - Push      O(1)
    - Insert    O(n)    - Insert    O(1)*
    - Delete    O(n)    - Dalete    O(1)*

## Hash Table

    - Pros: Fast lookups*() O(n) Linear time), Fast inserts, Flexible Keys
        * Good collision resolution needed
    - Cons: Unordered, Slow key iteration

## Interview Question

    - Hash Table improves Time complexitymore than Array, especially nested loops. but increase Space complexity.
