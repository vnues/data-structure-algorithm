class Solution {
public:
    vector<string> generateParenthesis(int n) {
        vector<string> strs;
        backtrace(strs,"",n,0);
        return strs;
    }

    void backtrace(vector<string>& strs,string str,int left,int right) {
        if (left == 0 && right == 0) {
            strs.push_back(str);
            return;
        }
        
        if (left > 0) backtrace(strs,str+"(",left-1,right+1);

        if (right > 0) backtrace(strs,str+")",left,right-1);
    }

};
