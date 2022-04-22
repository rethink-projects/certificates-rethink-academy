import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { Box, Divider, Image, Tag, TagLabel, Tooltip } from "@chakra-ui/react";
import { ptBR } from "date-fns/locale";
import {
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
  Button,
} from "@chakra-ui/react";

import Utils from "../../utils";

type FormPropsType = {
  studentName: string;
  teacherName: string;
  courseName: string;
  duration: string;
  onSelectFont: () => void;
  setStudentName: (value: string) => void;
  setTeacherName: (value: string) => void;
  setCourseName: (value: string) => void;
  setDuration: (value: string) => void;
  setStartDate: (value: any) => void;
  setEndDate: (value: any) => void;
  startDate: {
    formattedDate: string;
    date: Date;
  };
  endDate: {
    formattedDate: string;
    date: Date;
  };
};

function Form({
  studentName,
  teacherName,
  courseName,
  duration,
  startDate,
  endDate,
  setStudentName,
  setTeacherName,
  setCourseName,
  setDuration,
  setEndDate,
  setStartDate,
  onSelectFont,
}: FormPropsType) {
  const handleStatDate = (date: Date) => {
    const formattedDate = Utils.handleFormatDate(date);
    setStartDate(formattedDate);
  };

  const handleEndDate = (date: Date) => {
    const formattedDate = Utils.handleFormatDate(date);
    setEndDate(formattedDate);
  };

  return (
    <Flex mt={2} w='md' flexDirection='column' gap={4}>
      <FormControl isRequired>
        <FormLabel fontSize={12} color='brand.base' htmlFor='student'>
          Nome do(a) estudante
        </FormLabel>
        <Input
          variant='outline'
          value={studentName}
          borderColor='#ababab'
          placeholder='Insira o nome do(a) estudante'
          onChange={(e) => setStudentName(e.target.value)}
          _placeholder={{
            color: "brand.baseOff",
            fontSize: "12px",
            fontWeight: "thin",
          }}
          fontSize='12px'
          focusBorderColor='brand.details'
          color='brand.base'
          id='student'
          type='student'
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel fontSize={12} color='brand.base' htmlFor='teacher'>
          Nome do professor(a)
        </FormLabel>
        <Input
          value={teacherName}
          onChange={(e) => setTeacherName(e.target.value)}
          placeholder=' Insira o nome do(a) professor(a)'
          variant='outline'
          _placeholder={{
            color: "brand.baseOff",
            fontSize: "12px",
            fontWeight: "thin",
          }}
          fontSize='12px'
          focusBorderColor='brand.details'
          color='brand.base'
          borderColor='#ababab'
          id='teacher'
          type='teacher'
        />
      </FormControl>
      <Flex gap={2}>
        <FormControl isRequired>
          <FormLabel fontSize={12} color='brand.base' htmlFor='course'>
            Nome do curso
          </FormLabel>
          <Input
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            variant='outline'
            borderColor='#ababab'
            placeholder='Insira o nome do curso'
            _placeholder={{
              color: "brand.baseOff",
              fontSize: "12px",
              fontWeight: "thin",
            }}
            focusBorderColor='brand.details'
            color='brand.base'
            fontSize='12px'
            id='course'
            type='course'
          />
        </FormControl>
      </Flex>

      <Flex gap={2}>
        <FormControl isRequired w='sm'>
          <FormLabel fontSize={12} color='brand.base' htmlFor='duration'>
            Duração em horas
          </FormLabel>
          <NumberInput
            value={duration}
            onChange={(value) => setDuration(value)}
            defaultValue={10}
            min={1}
            fontSize='12px'
            focusBorderColor='brand.details'
            color='brand.base'
            borderColor='#ababab'
          >
            <NumberInputField fontSize='12px' />
            <NumberInputStepper>
              <NumberIncrementStepper color='brand.base' />
              <NumberDecrementStepper color='brand.base' />
            </NumberInputStepper>
          </NumberInput>
        </FormControl>
        <FormControl isRequired w='sm'>
          <FormLabel fontSize={12} color='brand.base' htmlFor='teacher'>
            Data de início
          </FormLabel>
          <DatePicker
            locale={ptBR}
            dateFormat='dd/MM/yyyy'
            onChange={handleStatDate}
            selected={startDate.date}
            customInput={
              <Input
                variant='outline'
                borderColor='#ababab'
                _placeholder={{
                  color: "brand.baseOff",
                  fontSize: "12px",
                  fontWeight: "thin",
                }}
                fontSize='12px'
                focusBorderColor='brand.details'
                color='brand.base'
                id='course'
                type='course'
              />
            }
          />
        </FormControl>
        <FormControl isRequired w='sm'>
          <FormLabel fontSize={12} color='brand.base' htmlFor='teacher'>
            Data de conclusão
          </FormLabel>
          <DatePicker
            locale={ptBR}
            selected={endDate.date}
            dateFormat='dd/MM/yyyy'
            onChange={handleEndDate}
            customInput={
              <Input
                variant='outline'
                borderColor='#ababab'
                placeholder='Insira o nome do Curso:'
                _placeholder={{
                  color: "brand.baseOff",
                  fontSize: "12px",
                  fontWeight: "thin",
                }}
                focusBorderColor='brand.details'
                color='brand.base'
                id='course'
                fontSize='12px'
                type='course'
              />
            }
          />
        </FormControl>
      </Flex>
      <Flex gap={2}>
        <Tooltip
          label='Clique para alterar a font da assinatura.'
          placement='top'
        >
          <Button
            onClick={onSelectFont}
            fontSize='12px'
            _hover={{
              bg: "brand.base",
            }}
            _focus={{
              outline: "none",
            }}
            _active={{
              outline: "none",
              ringColor: "brand.base",
              ringOffsetColor: "brand.base",

              bg: "brand.details",
            }}
            bg='brand.baseOff'
            leftIcon={<Image width={15} src='/assets/refresh-cw.svg' />}
          >
            Assinar Certificado
          </Button>
        </Tooltip>
      </Flex>
      <Box mt={12} h='0.3' bg='brand.bgOff' />
      <Flex gap={4} width='100%'>
        <Button
          fontSize='12px'
          bg='brand.details'
          _hover={{
            bg: "brand.base",
          }}
          _focus={{
            outline: "none",
          }}
          _active={{
            outline: "none",
            ringColor: "brand.base",
            ringOffsetColor: "brand.base",

            bg: "brand.details",
          }}
          leftIcon={<Image width={15} src='/assets/file-text.svg' />}
        >
          Baixar em PDF
        </Button>
        <Button
          fontSize='12px'
          bg='brand.details'
          _hover={{
            bg: "brand.base",
          }}
          _focus={{
            outline: "none",
          }}
          _active={{
            outline: "none",
            ringColor: "brand.base",
            ringOffsetColor: "brand.base",

            bg: "brand.details",
          }}
          leftIcon={<Image width={15} src='/assets/image.svg' />}
        >
          Baixar em JPG
        </Button>
      </Flex>
    </Flex>
  );
}

export default Form;
