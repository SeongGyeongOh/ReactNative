<?php
    header("Content-Type:application/json; charset=utf-8");

    $menu=$_GET['menu'];

    $conn=mysqli_connect("localhost", "kamniang", "rhdiddl12!", "kamniang");

    mysqli_query($conn, 'set names utf-8');

    $sql="SELECT * FROM burger WHERE menu='$menu'";

    $result=mysqli_query($conn, $sql);
    $row_num=mysqli_num_rows($result);

    for($i=0;$i<$row_num;$i++){
        $row=mysqli_fetch_array($result, MYSQLI_ASSOC);
        $rows[$i]=$row;
    }

    $echoResult=json_encode($rows);

    if($result){
        echo $echoResult;
    }else{
        echo "데이터 읽어오기 실패!";
    }


    mysqli_close($conn);

?>