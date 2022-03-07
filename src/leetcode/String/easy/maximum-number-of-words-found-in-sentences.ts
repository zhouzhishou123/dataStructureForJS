/*
 * @Author: zhouzhishou
 * @Date: 2022-03-08 01:41:37
 * @Description: 2114. 句子中的最多单词数 https://leetcode-cn.com/problems/maximum-number-of-words-found-in-sentences/
 */

/**
 * @param {string[]} sentences
 * @return {number}
 */
 var mostWordsFound = function(sentences:string[]) :number {
     if(sentences.length === 0) return 0
     let mostWordsCount = 0  
     function getWordcount(str:string){
        if(str === '') return 0
        return str.split(' ').length
    }
     for(let i=0;i<sentences.length;i++){
         if(getWordcount(sentences[i]) > mostWordsCount){
            mostWordsCount = getWordcount(sentences[i])
         }
     }  
     return mostWordsCount
};

