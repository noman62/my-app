#include<iostream>
#include<algorithm>
using namespace std;

bool isPossible(int a[1000], int k, int mid, int n) {
    int lastPos = a[0];
    int cowcount = 1;
    for (int i = 0; i < n; i++) {
        if (a[i] - lastPos >= mid) {
            cowcount++;
            if (cowcount == k) {
                return true;
            }
            lastPos = a[i];
        }
    }
    return false;
}

int main() {
    int t;
    cin >> t;
    while (t--) {
        int n, k, a[1000];
        cin >> n >> k;
        for (int i = 0; i < n; i++) {
            scanf("%d", &a[i]);
        }
        sort(a, a + n);
        int ans = -1;
        int s = 0;
        int e = a[n - 1];
        while (s <= e) {
            int mid = (s + e) / 2;
            if (isPossible(a, k, mid, n)) {
                ans = mid;
                s = mid + 1;
            } else {
                e = mid - 1;
            }
        }
        printf("%d\n", ans);
    }
    return 0;
}
