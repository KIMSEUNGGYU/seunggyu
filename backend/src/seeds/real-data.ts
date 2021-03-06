import { makeHash } from '../utils/utils';

const usersData = [
  {
    userId: 'gyu',
    password: makeHash('gyu'),
  },
  {
    userId: 'root',
    password: makeHash('root'),
  },
];

const seriesData = [
  {
    title: '브라우저',
    postId: '1',
    postTitle: '브라우저 렌더링 1 - DOM, BOM',
  },
  {
    title: '브라우저',
    postId: '2',
    postTitle: '브라우저 렌더링 2 - CSSOM 과 Render Tree',
  },
  {
    title: '브라우저',
    postId: '3',
    postTitle: '브라우저 렌더링 3 - CRP',
  },
  {
    title: '브라우저',
    postId: '4',
    postTitle: '이벤트 루프 0 - 이벤트',
  },
  {
    title: '브라우저',
    postId: '5',
    postTitle: '이벤트 루프 1 - 프로세스와 쓰레드',
  },
  {
    title: '브라우저',
    postId: '6',
    postTitle: '이벤트 루프 2 - 브라우저 런타임 환경',
  },
  {
    title: '자료구조',
    postId: '11',
    postTitle: '자료구조 - 스택',
  },
  {
    title: '자료구조',
    postId: '12',
    postTitle: '자료구조 - 큐',
  },
  {
    title: '자료구조',
    postId: '13',
    postTitle: '자료구조 - 링크드 리스트',
  },
];

const postsData = [
  {
    title: '자료구조 - 스택',
    date: '2021.4.19',
    description:
      '스택\n\n가장 나중에 삽입한 데이터를 가장 먼저 빼내는 데이터 구조\nLIFO (Last In First Out)\n\n기능\n\npush\n\n    데이터를 스택에 넣기\n\npop\n\n    데이터를 스택에서 꺼내기\n\n스택의 장단점\n\n장점\n\n구조가 단순하고 구현이 쉬움\n데이터 저장/읽기 속도가 빠름\n\n단점\n\n데이터 최대 갯수를 미리 정해야함\n    파이썬의 경우 재귀 함수는 최대 1000번 까지만 가능\n저장 공간의 낭비가 발생할 수 있음.\n    미리 최대 갯수 만큼 저장 공간을 확보해야함\n\n→ 스택은 단순하고 빠른 성능을 위해 사용되므로, 보통 배열 구조를 활용해서 구현하는 것이 일반적임. 이 경우, 위에서 열거한 단점이 있을 수 있음\n\n리스트로 스택 구현하기\n\n리스트로 스택 구현하기\n\n        stack_list',
    tags: '자료구조',
    contents:
      '# 스택\n\n- 가장 나중에 삽입한 데이터를 가장 먼저 빼내는 데이터 구조\n- LIFO (Last In First Out)\n\n## 기능\n\n- `push`\n\n    데이터를 스택에 넣기\n\n- `pop`\n\n    데이터를 스택에서 꺼내기\n\n## 스택의 장단점\n\n### 장점\n\n- 구조가 단순하고 구현이 쉬움\n- 데이터 저장/읽기 속도가 빠름\n\n### 단점\n\n- 데이터 최대 갯수를 미리 정해야함\n    - 파이썬의 경우 재귀 함수는 최대 1000번 까지만 가능\n- 저장 공간의 낭비가 발생할 수 있음.\n    - 미리 최대 갯수 만큼 저장 공간을 확보해야함\n\n→ 스택은 단순하고 빠른 성능을 위해 사용되므로, 보통 배열 구조를 활용해서 구현하는 것이 일반적임. 이 경우, 위에서 열거한 단점이 있을 수 있음\n\n## 리스트로 스택 구현하기\n\n- 리스트로 스택 구현하기\n\n    ```python\n    stack_list = list()\n\n    def push(data):\n        """ 데이터 삽입 """\n        stack_list.append(data)\n        \n    def pop():\n        """ 데이터 삭제 """\n        if len(stack_list) <= 0:\n            return -1   ## 에러 처리\n        data = stack_list[-1]\n        del stack_list[-1]\n        return data\n        \n    ## 실행\n    for i in range(10):\n        push(i)\n\n    print(pop())\n    print(pop())\n    ```\n\n- 사실상 파이썬에서 제공하는 `append()` 와 `pop()` 을 사용하면 스택 처럼 활용 가능\n\n## 스택 활용\n\n- 컴퓨터 내부의 프로세스 구조의 **함수 동작 방식**\n\n    프로세스에서 함수를 처리하는 동작 방식에서 스택이라는 자료 구조 사용\n\n    - 재귀함수를 이용한 간단한 예제',
  },
  {
    title: '자료구조 - 큐',
    date: '2021.4.19',
    description:
      '큐\n\n가장 먼저 넣은 데이터를 가장 먼저 꺼내는 자료 구조\nFIFO(First In First Out ) , LILO(Last In Last Out) 방식으로 스택과 꺼내는 순서가 반대\n\n용어\n\nEnqueue\n\n    큐에 데이터를 넣는 기능\n\nDequque\n\n    큐에 데이터를 꺼내는 기능\n\n파이썬 라이브러리\n\nQueue\n\n    일반 적인 큐 자료 구조\n\nLifoQueue\n\n    나중에 입력된 데이터가 먼저 출력되는 구조 → 스택\n\nPriorityQueue\n\n    데이터마다 우선순위를 넣어, 우선순위가 높은 순으로 데이터 출력\n\n큐 연산\n\nqsize\n\n    큐 안에 있는 원소의 수?\n\nput\n\n    큐 안에 있는 데이터 삽입\n\nget\n\n    큐 안에 있는 데이터 가져오기\n\nQueue 예제\n\n ',
    tags: '자료구조',
    contents:
      '# 큐\n\n- 가장 먼저 넣은 데이터를 가장 먼저 꺼내는 자료 구조\n- FIFO(First In First Out ) , LILO(Last In Last Out) 방식으로 스택과 꺼내는 순서가 반대\n\n## 용어\n\n- `Enqueue`\n\n    큐에 데이터를 넣는 기능\n\n- `Dequque`\n\n    큐에 데이터를 꺼내는 기능\n\n## 파이썬 라이브러리\n\n1. `Queue`\n\n    일반 적인 큐 자료 구조\n\n2. `LifoQueue`\n\n    나중에 입력된 데이터가 먼저 출력되는 구조 → 스택 \n\n3. `PriorityQueue`\n\n    데이터마다 우선순위를 넣어, 우선순위가 높은 순으로 데이터 출력\n\n## 큐 연산\n\n- `qsize`\n\n    큐 안에 있는 원소의 수?\n\n- `put`\n\n    큐 안에 있는 **데이터 삽입**\n\n- `get`\n\n    큐 안에 있는 **데이터 가져오기**\n\n1. Queue 예제\n\n    ```python\n    import queue\n    data_queue = queue.Queue()\n\n    # Queue\n    data_queue.put(1)\n    data_queue.put(2)\n\n    # \n    data_queue.qsize()\n\n    # dequeue\n    data_queue.get()\n\n    # \n    data_queue.qsize()\n\n    # \n    data_queue.get()\n\n    #\n    data_queue.qsize()\n\n    # data_queue.get() # error\n    ```\n\n2. LIFO QUEUE\n\n    ```python\n    import queue\n    data_queue = queue.LifoQueue()\n    data_queue.put(1)\n    data_queue.put(2)\n\n    data_queue.qsize()\n\n    data_queue.get()  # 마지막에 있는 원소를 반환 -> 스택 구조\n    ```\n\n    - LIFO QUEUE 예제\n    - 스택 구조\n3. Priority Queue\n\n    ```python\n    import queue\n    data_queue = queue.PriorityQueue()\n\n    # 우선순위 큐인 경우 튜플형식으로 우선순위, 데이터 를 넣어야함\n    # 우선순위가 높은 것이 숫자가 낮음\n    data_queue.put((10, \'korea\')) \n    data_queue.put((5, 1)) \n    data_queue.put((15, \'china\'))\n\n    data_queue.qsize()\n\n    data_queue.get()\n    data_queue.get()\n    ```\n\n    - Priority Queue 예제\n\n- 우선순위 큐인 경우 튜플형식으로 우선순위, 데이터 를 넣어야함\n- 우선순위가 높은 것이 숫자가 낮음\n\n## 큐 규현해보기\n\n- 리스트를 이용하여 간단한 큐 구현하기\n\n```python\nqueue_list = list()\n\ndef enqueue(data):\n    """데이터를 삽입하는 기능"""\n    queue_list.append(data)\n    \ndef dequeue():\n    """데이터를 가져오는 기능"""\n    if len(queue_list) <= 0:\n        return -1\n    data = queue_list[0]\n    del queue_list[0]\n    return data\n\n## 수행 \nfor index in range(2):\n    enqueue(index)\n\nprint(dequeue())  # 0\nprint(dequeue())  # 1\n# print(dequeue())  # -1 ## 에러 처리\n```\n\n## 큐는 어디에서 많이 쓰일까??\n\n- 멀티 태스킹을 위한 프로세스 스케쥴링 방식을 구현하기 위해 많이 사용됨\n\n### 멀티 태스킹이란?\n\n- 한개의 CPU 를 가진 컴퓨터는 원치적으로 하나의 하나의 작업을 수행한다.\n\n    하지만 컴퓨터의 연산 속도는 인간의 작업 처리 속도보다 빠르기 때문에 스케줄링이라는 방식을 사용해 컴퓨터 사용자에게 병렬 연산이 이루어지는 것과 같은 환경을 제공하는 것!\n\n- 사람의 처리 속도는 초 단위로 판단하지만, 컴퓨터는 그 보다 훨씬 빠르게 작업하기 때문에 하나의 작업을 수행하지만, 사용자가 인식하지 못하는 선에서 작업을 쪼개서 빠르게 여러 작업을 수행해 멀티 작업을 하는 것처럼 인식하게 하는 방법',
  },
  {
    title: '자료구조 - 링크드리스트',
    date: '2021.4.19',
    description:
      '링크드 리스트\n\n배열은 순차적으로 연결된 공간에 데이터를 나열하는 데이터 구조\n링크드 리스트 는 떨어진 곳에 존재하는 데이터를 화살표로 연결해서 관리하는 데이터 구조\n\n용어\n\n노드(node)\n\n    데이터 저장 단위,  ( 데이터 값, 포인터) 로 구성\n\n포인터 (pointer)\n\n    각 노드 안에서, 다음이나 이전의 노드와의 연결 정보를 가지고 있는 공간\n\n링크드리스트 장/단점\n\n장점\n    미리 데이터 공간을 할당하지 않아도 됨\n    배열은 미리 데이터 공간을 할당 해야함\n단점\n    연결을 위한 별도 데이터 공간이 필요해, 저장공간이 효율적 이지 않음.\n    연결 정보를 찾는 시간이 필요해 접근 속도가 느림\n\n        처음부터 차례대로 읽으면서 검색함\n\n    중간 데이터 삭제시, 앞뒤 ',
    tags: '자료구조',
    contents:
      '# 링크드 리스트\n\n- `**배열**`은 **순차적으로 연결된 공간에 데이터를 나열하는 데이터 구조**\n- `**링크드 리스트**` 는 **떨어진 곳에 존재하는 데이터를 화살표로 연결해서 관리하는 데이터 구조**\n\n## 용어\n\n- `**노드(node)**`\n\n    데이터 저장 단위,  ( 데이터 값, 포인터) 로 구성\n\n- **`포인터 (pointer)`**\n\n    각 노드 안에서, 다음이나 이전의 노드와의 연결 정보를 가지고 있는 공간\n\n## 링크드리스트 장/단점\n\n- **장점**\n    - 미리 데이터 공간을 할당하지 않아도 됨\n    배열은 미리 데이터 공간을 할당 해야함\n- 단점\n    - 연결을 위한 별도 데이터 공간이 필요해, 저장공간이 효율적 이지 않음.\n    - 연결 정보를 찾는 시간이 필요해 접근 속도가 느림\n\n        처음부터 차례대로 읽으면서 검색함\n\n    - 중간 데이터 삭제시, 앞뒤 데이터의 연결을 재구성해야 하는 부가적인 작업 필요\n\n       ![링크드 리스트 2](http://res.cloudinary.com/du4w00gvm/image/upload/v1618820354/n4wt0kgic9lkm7zpyjjf.png)\n\n## 링크드 리스트 구현\n\n```python\nclass Node:\n    """링크드리스트 노드 클래스"""\n    def __init__(self, data, next=None):\n        self.data = data\n        self.next = next\n\nclass Linkedlist:\n    """링크드리스트 관리하는 클래스"""\n    def __init__(self, data):\n        self.head = Node(data)\n    \n    def add(self, data):\n        """링크드 리스트 맨 마지막에 노드 추가하는 기능"""\n        if self.head == "":\n            self.head = Node(data)\n        else:\n            node = self.head\n            while node.next:\n                node = node.next\n            node.next = Node(data)\n        \n    def description(self):\n        """링크드리스트의 모든 데이터를 출력하는 기능"""\n        node = self.head\n        while node:\n            print(node.data)\n            node = node.next\n            \n    def delete(self, data):\n        """링크드리스트 특정 노드 삭제\n        고려사항\n        1. head 를 삭제\n        2. 중간 노드를 삭제\n        3. 마지막 노드를 삭제\n        """\n        if self.head == "":\n            print("해당 값을 가진 노드가 존재하지 않습니다.")\n            return\n        \n        if self.head.data == data:    # 1. head 삭제\n            temp = self.head\n            self.head = self.head.next\n            del temp # 객체 삭제\n        else:\n            node = self.head\n            while node.next:\n                if node.next.data == data:\n                    temp = node.next\n                    node.next = node.next.next\n                    del temp\n                else:\n                    node = node.next\n    \n    def search_node(self, data):\n        """링크드리스트 특정 노드 탐색"""\n        node = self.head\n\n        while node.next:\n            if node.data == data:\n                return node\n            else:\n                node = node.next\n        \n        return Node(-1)   # 특정 노드 찾기 못하면 \n```\n\n```python\n## 수행\nlinked_list1 = Linkedlist(0)\n\nfor data in range(1, 10):\n    linked_list1.add(data)\n\nlinked_list1.description()\n\nprint("\\n4의 데이터 삭제 - 중간 노드 삭제")\nlinked_list1.delete(4)\nlinked_list1.description()\n\nprint("\\n9의 데이터 삭제 - 마지막 노드 삭제")\nlinked_list1.delete(9)\nlinked_list1.description()\n\nprint("\\n노드 탐색 ")\nnode = linked_list1.search_node(4)\nprint(\'탐색 노드:\', node.data)\n```\n\n## 더블 링크드 리스트  (이중 연결 리스트)\n\n![링크드리스트 1](http://res.cloudinary.com/du4w00gvm/image/upload/v1618820362/gfuwz32zzkyxkawqwdti.png)\n\n- 양방향으로 연결되어 있어 노드 탐색이 양쪽으로 모두 가능\n양쪽에 있으면, 단일과 달리 탐색 데이터에 따라 앞(head) 뒤(tail) 에서 탐색할 수 있음\n\n    단일 링크드 리스트는 앞(head) 만 탐색 가능',
  },
  {
    title: '브라우저 렌더링 1 - DOM',
    date: '2021.4.19',
    description:
      '알게될 내용\n\n브라우저가 개발자가 만든 웹페이지나 웹어플리케이션을 어떻게 분석해서 표시하는지\n\n    DOM 요소 조작 방법\n\n    그리고 브라우저가 렌더링하는 순서와 CSS, 애니메이션을 어떻게 써야 성능이 좋은지에 대해 학습\n\nDOM\n\nDocument Object Model\nDOM 은 HTML 요소들을 브라우저가 이해할 수 있는 형태로 만들기 위한 구조임\n웹페이지를 만들면 브라우저는 HTML 파일을 읽어 각각의 태그들을 분석해서 노드로 변환함\n\n    즉, 브라우저가 자신들이 이해할 수 있는 자신들만의 오브젝트로 변환함\n\n    ⇒ HTML 에서 사용된 tag 들이 자바스크립트에서는 Node 라는 오브젝트로 변환됨\n\nDOM Tree 구조\n\n    Node 는 EventTarget 이다.\n    Docu',
    tags: '브라우저',
    contents:
      "### 알게될 내용\n\n- 브라우저가 개발자가 만든 웹페이지나 웹어플리케이션을 어떻게 분석해서 표시하는지\n\n    DOM 요소 조작 방법\n\n    그리고 브라우저가 렌더링하는 순서와 CSS, 애니메이션을 어떻게 써야 성능이 좋은지에 대해 학습\n\n### DOM\n\n- Document Object Model\n- **DOM 은 HTML 요소들을 브라우저가 이해할 수 있는 형태로 만들기 위한 구조임**\n- **웹페이지를 만들면 브라우저는 HTML 파일을 읽어 각각의 태그들을 분석해서 노드로 변환함**\n\n   ![브라우저1](http://res.cloudinary.com/du4w00gvm/image/upload/v1618820408/cesfssar4pumrtdnxhlz.png)\n\n    즉, 브라우저가 자신들이 이해할 수 있는 자신들만의 오브젝트로 변환함\n\n    ⇒ HTML 에서 사용된 tag 들이 자바스크립트에서는 Node 라는 오브젝트로 변환됨\n\n- **DOM Tree 구조**\n\n   ![브라우저2](http://res.cloudinary.com/du4w00gvm/image/upload/v1618820414/duqp5s9ykaiqb6p2bk3n.png)\n\n    - Node 는 EventTarget 이다.\n    - Document 도 Node 이고\n\n        Element 도 Node 이다. (Element 는 HTML 요소들이 Element로 변환 됨)\n\n        Element도 HTML 요소라면 HTMLElement, SVG 요소라면 SVGElement 가 됨\n\n        또 HTMLElement 에서 어떤 HTML 요소를 쓰는냐에 따라 HTMLInputElement, HTMLDivElement 로 구성됨\n\n    - **즉, 모든 HTML 요소들은 Node 이고 Node는 이벤트 타겟이므로, 모든 HTML 요소들은 EventTarget 으로 다양한 이벤트를 처리할 수 있음**\n- **HTML 요소들이 DOM 트리로 변환하는 과정**\n\n  ![브라우저3](http://res.cloudinary.com/du4w00gvm/image/upload/v1618820420/deralqh7lhgpcxjfzcbc.png)\n\n    - 최상위 요소로 HTMLHtmlElement 인 Node가 정의됨\n    - HTML에 있는 각각의 태그들과 DOM 요소랑 1:1 매칭되어 구성됨\n\n    정리하자면\n\n    HTML 파일을 브라우저에서 읽으면 브라우저가 이해하고 사용할 수 있는 Object로 변환함\n    이렇게 브라우저 위에서 각각의 태그들이 그에 맞는 오브젝트로 맵핑되어 표기되어짐!\n\n### 브라우저 구성 요소\n\n![브라우저4](http://res.cloudinary.com/du4w00gvm/image/upload/v1618820426/a4pshl1tusyyxin5bane.png)\n\n- **브라우저가 실행되고 웹페이지를 읽을 때 root 에 window 가 있고**\n\n    **그 하위에** `DOM` `BOM` `Javascript` 으로 구성되어 있음\n\n    BOM 은 브라우저 정보를 나타냄!\n\n---\n\n**DOM vs DOM Tree**\n\n DOM vs DOM Tree\n내가 만든 HTML 파일이 브라우저가 읽을 때 DOM Tree로 변환되어  브라우저 웹페이지상에 나에게 보이고 프로그래밍 언어(자바스크립트)로 DOM Tree의 각 요소(ex) HTMLDivElement)에 접근하여 요소를 수정 삭제 추가... 할수 있다'\n\n오웃 정확해요 👍\n\nDOM은 이렇게 우리의 HTML 태그가 자바스크립트 오브젝트 형태로 변환되는 (그래서 우리가 자바스크립트로 제어할 수 있도록) 이런 컨셉, 모델을 가리키는 전반적인 개념 같은 아이구요 :) 이런 DOM이 어떤 구조로 생성되었는지를 정의할 수 있는게 DOM Tree인거 같아요. 부모로 부터 자식으로 뻗어 나가는 나무 같은 구죠 :)\n\n우선 해당 개념을 설명하기 앞서 사전 지식을 설명하자면\n\n개발자가 작성한 HTML 을 브라우저에서 읽을 때 HTML 각 요소들을 브라우저가 이해할 수 있는 작업을 수행한다. \n\n이 과정에서 HTML 각 요소들이 브라우저가 이해할 수 있게 DOM으로 변환되고 이 DOM이 어떤 구조로 생성되었는지를 정의하는게 DOM Tree 이다.\n\n또한, 브라우저가 이해할 수 있게 변환되었기 때문에 개발자는 각 DOM 요소에 접근하여 여러 가지 작업(추가, 삭제, 수정 등)들을 수행할 수 있다.",
  },
];

const tagsData = [{ name: '자료구조' }, { name: '브라우저' }];

export { usersData, seriesData, postsData, tagsData };
